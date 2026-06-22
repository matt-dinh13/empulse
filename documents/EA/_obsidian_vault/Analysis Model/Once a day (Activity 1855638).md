---
type: Activity
stereotype: "ArchiMate_Event"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855638
diagrams: 2
connections: 17
tags:
  - activity
  - analysis-model
---

# ⚡ Once a day

> **Type**: Activity · **Stereotype**: «ArchiMate_Event»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 🔗 Connections (17)

- ← Dependency: [[DDM Statements Export]]
- ← Dependency: [[Process INS outgoing payments]]
- ← Dependency: [[Process CEL Reward job]]
- ← Dependency: [[{ADD}Cleaning outbox tables - job (Requirement 1855621)]]
- ← Dependency: [[Activate Disbursed Contracts]]
- ← Dependency: [[Contract cancellation (Requirement 1855617)]]
- ← Dependency: [[{ADD}Contract registration and finishing job]]
- ← Dependency: [[Automatical cancellation of undisbursed transactions]]
- ← Dependency: [[Load financial partnership requests job]]
- → Dependency: [[After business hours]]
- ← Dependency: [[Delete temporary Product Offer Requests - job]]
- ← Dependency: [[Cancel Undisbursed Contracts]]
- ← Dependency: [[Anonymize archived temporary application]]
- ← Dependency: [[Activate Insurance Program version - job]]
- ← Dependency: [[Get prepared data from external storage job]]
- ← Dependency: [[Payment Channel Change Check]]
- ← Dependency: [[Invalidate Product Offers - job]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Custom: CBL-11956 (CLM-4061 ) Complaints Data and Communication Data to Hadoop
