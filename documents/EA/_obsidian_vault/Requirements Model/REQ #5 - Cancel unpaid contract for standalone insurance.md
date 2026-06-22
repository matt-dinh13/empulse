---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3666 (CLM-1478) Extended Warranty Standalone"
domain: "Requirements Model"
element_id: 1314965
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #5 - Cancel unpaid contract for standalone insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3666 (CLM-1478) Extended Warranty Standalone

## 📝 Notes

This part described how can be SAI contract canceled.
It can happen if prescribed insurance premium is not paid by client; i.e. client doesn't accept the insurance conditions - this part ensures UC 08.925 Cancel expired loan service requests, where the expired loan service requests are canceled and in case SAI contract, contract conditions are set to rejected.
Since SAI contract will have Contract condition set to Rejected,  it is cancelled by UC 01.445 Cancel undisbursed contract 
Second possibility is cancellation of the contract based on client's request.

## 📊 Appears In (1 diagrams)

- Custom: CBL-3666 (CLM-1478) Extended Warranty Standalone
