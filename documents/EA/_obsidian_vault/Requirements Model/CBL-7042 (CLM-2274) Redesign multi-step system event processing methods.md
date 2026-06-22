---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7042 (CLM-2274) Redesign multi-step system event processing methods"
domain: "Requirements Model"
element_id: 1436539
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-7042 (CLM-2274) Redesign multi-step system event processing methods

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7042 (CLM-2274) Redesign multi-step system event processing methods

## 📝 Notes

We should redesign SE processing methods that trigger 2 or more independent actions to be really independent (non-blockable). We need to discuss how to monitor failures of single steps if SE won't fail as a result of it. Alternatively we need to improve error messages to easily identify the failing step of SE processing.

We should redesign SE processing methods that contain multi-step business logic. This logic should be separated into a standalone UC (method) and called as a single step of SE processing.

ClientIdChangedSE - 2 steps
ContractActivationSE - 2 steps
ContractCancellationSE - 5 steps
ContractRegistrationSE - 3 steps, already try-catched, has to be revised
ContractSignSE - 7 steps
EOMBillingFinishedSE - 1 step, already try-catched, has to be revised
SecuritizationTrancheProcessedSE - kind of 2 steps

ContractActivationSE, ContractRegistrationSE - will it fail even though the fix on ISPAY side?

## 🔗 Connections (1)

- ← Generalization: [[DEV Redesign multi-step system event processing methods]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-7042 (CLM-2274) Redesign multi-step system event processing methods
