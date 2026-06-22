"""
BSL Explorer — One-Command Update Pipeline
Runs all extraction and patching scripts in the correct order.

Usage:
    python _scripts/update_all.py              # Full update
    python _scripts/update_all.py --quick      # Skip containment + scenarios (faster)
    python _scripts/update_all.py --dry-run    # Show what would run without executing
"""
import subprocess
import sys
import os
import time

SCRIPTS_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPTS_DIR)

# Pipeline steps in execution order
PIPELINE = [
    {
        'name': '1. Extract Data',
        'cmd': [sys.executable, os.path.join(SCRIPTS_DIR, 'extract_data.py')],
        'skip_on_quick': False,
        'description': 'Extract packages, diagrams, elements, connectors from .eap'
    },
    {
        'name': '2. Extract Containment',
        'cmd': [sys.executable, os.path.join(SCRIPTS_DIR, 'extract_containment.py')],
        'skip_on_quick': True,
        'description': 'Build geometric containment map (boundary -> child elements)'
    },
    {
        'name': '3. Extract Scenarios',
        'cmd': [sys.executable, os.path.join(SCRIPTS_DIR, 'extract_scenarios.py')],
        'skip_on_quick': True,
        'description': 'Extract UseCase scenarios (Basic Path, Alternate, Exception)'
    },
    {
        'name': '4. Enrich Parent IDs',
        'cmd': [sys.executable, os.path.join(SCRIPTS_DIR, 'enrich_parent_ids.py')],
        'skip_on_quick': False,
        'description': 'Add parent_id to elements from t_object.ParentID'
    },
    {
        'name': '5. Fix Mermaid Quality',
        'cmd': [sys.executable, os.path.join(SCRIPTS_DIR, 'fix_mermaid_quality.py')],
        'skip_on_quick': False,
        'description': 'Regenerate all Mermaid diagram syntax with improved generators'
    },
    {
        'name': '6. Patch Class Attributes',
        'cmd': ['node', os.path.join(SCRIPTS_DIR, 'patch_class_attrs.js')],
        'skip_on_quick': False,
        'description': 'Inject class attributes/operations into classDiagram syntax'
    },
    {
        'name': '7. Patch Notes',
        'cmd': ['node', os.path.join(SCRIPTS_DIR, 'patch_notes.js'), '--force'],
        'skip_on_quick': False,
        'description': 'Inject Note elements (EA sticky notes) into Mermaid diagrams'
    },
]

def main():
    dry_run = '--dry-run' in sys.argv
    quick = '--quick' in sys.argv

    print('=' * 60)
    print('  BSL Explorer - Update Pipeline')
    print('=' * 60)
    if dry_run:
        print('  MODE: Dry run (no scripts will execute)')
    elif quick:
        print('  MODE: Quick (skipping containment + scenarios)')
    else:
        print('  MODE: Full update')
    print()

    total_start = time.time()
    results = []

    for step in PIPELINE:
        if quick and step['skip_on_quick']:
            print(f">> {step['name']} -- SKIPPED (quick mode)")
            results.append((step['name'], 'SKIPPED', 0))
            continue

        print(f"=> {step['name']}...")
        print(f"   {step['description']}")

        if dry_run:
            print(f"   Would run: {' '.join(step['cmd'])}")
            results.append((step['name'], 'DRY RUN', 0))
            continue

        step_start = time.time()
        try:
            result = subprocess.run(
                step['cmd'],
                cwd=PROJECT_DIR,
                capture_output=True,
                text=True,
                timeout=120
            )
            duration = time.time() - step_start

            if result.returncode != 0:
                print(f"   [FAIL] (exit code {result.returncode}, {duration:.1f}s)")
                if result.stderr:
                    # Show last 5 lines of stderr
                    lines = result.stderr.strip().split('\n')
                    for line in lines[-5:]:
                        print(f"      {line}")
                results.append((step['name'], 'FAILED', duration))
                # Ask whether to continue
                print("\n   Step failed. Continue with remaining steps? [Y/n] ", end='')
                answer = input().strip().lower()
                if answer == 'n':
                    break
            else:
                print(f"   [OK] ({duration:.1f}s)")
                # Show key output lines (last non-empty line of stdout)
                if result.stdout:
                    lines = [l for l in result.stdout.strip().split('\n') if l.strip()]
                    if lines:
                        print(f"      {lines[-1]}")
                results.append((step['name'], 'OK', duration))
        except subprocess.TimeoutExpired:
            print(f"   [TIMEOUT] (>120s)")
            results.append((step['name'], 'TIMEOUT', 120))
        except FileNotFoundError as e:
            print(f"   [NOT FOUND] {e}")
            results.append((step['name'], 'NOT FOUND', 0))

        print()

    # Summary
    total_duration = time.time() - total_start
    print('=' * 60)
    print('  SUMMARY')
    print('=' * 60)
    for name, status, dur in results:
        icon = {'OK': '[OK]', 'FAILED': '[FAIL]', 'SKIPPED': '[SKIP]', 'TIMEOUT': '[TIME]', 'DRY RUN': '[DRY]', 'NOT FOUND': '[N/A]'}
        print(f"  {icon.get(status, '?')} {name}: {status} ({dur:.1f}s)")
    print(f"\n  Total: {total_duration:.1f}s")
    
    failed = [r for r in results if r[1] == 'FAILED']
    if failed:
        print(f"\n  WARNING: {len(failed)} step(s) failed!")
        sys.exit(1)
    else:
        print(f"\n  All steps completed successfully!")
        print(f"  Open BSL Explorer.bat or visit http://localhost:8080/BSL%20Explorer.html")

if __name__ == '__main__':
    main()
