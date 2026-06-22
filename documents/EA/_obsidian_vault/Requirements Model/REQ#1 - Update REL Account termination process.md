---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3456 (CLM-1436) Account Termination without waiting EOM process"
domain: "Requirements Model"
element_id: 1339287
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Update REL Account termination process

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3456 (CLM-1436) Account Termination without waiting EOM process

## 📝 Notes

The goal is:
- add new possible result of AccountNotificationWS.ProcessAccountClosureResult (TERMINATION_EXPIRED)
- after receiving TERMINATION_EXPIRED, process Cancel REL contract termination request (cancel request + call LoyaltyManagementWS.cancelAccountTermination)
- update Insurance termination event (currently it is terminated on Request creation event and it is not activated after Termination cancellation, move to the ProcessAccountClosureResult)

## 🔗 Connections (3)

- → Dependency: [[01.740 Process notification about credit account closure (UseCase 1839633)]]
- → Dependency: [[01.171 Create REL contract termination request (UseCase 1852809)]]
- → Dependency: [[01.172 Cancel REL contract termination request manually (UseCase 1852812)]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-3456 (CLM-1436) Account Termination without waiting EOM process
