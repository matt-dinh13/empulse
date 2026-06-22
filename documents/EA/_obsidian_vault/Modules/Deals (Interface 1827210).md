---
type: Interface
stereotype: "resource"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/CSI-1454 Create Deal method implementation"
domain: "Modules"
element_id: 1827210
diagrams: 17
connections: 35
tags:
  - interface
  - modules
---

# 🔶 Deals

> **Type**: Interface · **Stereotype**: «resource»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/CSI-1454 Create Deal method implementation

## 📝 Notes

VAS Deal API

## 🔗 Connections (35)

- ← Dependency: [[INSR (Insurance)]]
- → Usage: [[{ADD}ProlongDealPeriodRequest]]
- → Usage: [[ActivateDealRequest]]
- → Dependency: [[{ADD}11.030 Replace deal service (VAS) (UseCase 1829609)]]
- → Usage: [[Deal (Class 1795097)]]
- → Dependency: [[11.010 Create deal (VAS) (UseCase 1829623)]]
- → Dependency: [[{ADD}11.070 Prolong Deal Period (VAS) (UseCase 1829611)]]
- → Dependency «path»: [[{ADD}OperationStatus]]
- → Dependency: [[Deal (Class 1795097)]]
- → Usage: [[Deal (Class 1795097)]]
- → Usage: [[{ADD}TerminateDealRequest]]
- → Usage: [[Deal (Class 1795097)]]
- → Usage: [[{ADD}CancelDealRequest]]
- → Dependency: [[{ADD}11.060 Terminate Deal (VAS) (UseCase 1829626)]]
- → Dependency: [[11.040 Activate Deal (VAS)]]
- → Dependency «path»: [[{ADD}InsurancePeriods]]
- → Dependency: [[GetDealRequest]]
- → Dependency: [[FindDealRequest]]
- → Dependency: [[11.002 Find deal (VAS)]]
- → Dependency «path»: [[{ADD}StatusChange]]
- → Dependency: [[11.040 Activate Deal (VAS)]]
- → Dependency: [[Deals]]
- → Dependency: [[Deal (Class 1795097)]]
- → Dependency: [[11.001 Get deal (VAS)]]
- → Dependency: [[{ADD}11.050 Deactivate Deal (VAS)]]
- → Usage: [[Deal (Class 1795097)]]
- → Dependency: [[{ADD}11.080 Cancel Deal (VAS) (UseCase 1829615)]]
- → Usage: [[Deal (Class 1795097)]]
- → Usage: [[{ADD}ActivateDealRequest_v2]]
- → Usage: [[{ADD}DeactivateDealRequest]]
- → Usage: [[{ADD}ReplaceServiceRequest (Class 1826438)]]
- → Usage: [[Deal (Class 1795097)]]
- → Dependency: [[CreateDealRequest]]
- → Usage: [[Deal (Class 1795097)]]
- → Dependency «path»: [[Periods]]

## 📊 Appears In (17 diagrams)

- Custom: CSI-1454 Create Deal method implementation
- Custom: CSI-2110 Get Deal method implementation
- Custom: CSI-2131 Find Deal method implementation
- Logical: Activate Deal
- Logical: Cancel Deal
- Logical: Create and Update Deal Period
- Logical: Create Deal
- Logical: Deactivate Deal
- Logical: Deals_v2.Activate Deal
- Logical: Find Deal
- Logical: Get Deal
- Logical: Prolong Deal
- Logical: Replace Deal Service
- Logical: Resources
- Logical: Resources
- Logical: Resources
- Logical: Terminate Deal
