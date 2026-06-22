---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14504 (CLM-5127) Asynchronous contract activation"
domain: "Requirements Model"
element_id: 1728235
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-14504 (CLM-5127) Asynchronous contract activation

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14504 (CLM-5127) Asynchronous contract activation

## 📝 Notes

Activation operation should be triggered based on registration system event, so system can guarantee that registration processing is fully finished before starting activation processing.

Trigger for activation should be ContractRegisteredSE (REM event). ContractRegistrationSE (BSL event) should be fully removed.

## 📊 Appears In (1 diagrams)

- Custom: CBL-14504 (CLM-5127) Asynchronous contract activation
