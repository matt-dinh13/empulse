---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3666 (CLM-1478) Extended Warranty Standalone"
domain: "Requirements Model"
element_id: 1314969
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #3 - Evaluate client's repayment of standalone insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3666 (CLM-1478) Extended Warranty Standalone

## 📝 Notes

Standalone insurance can be only activated if client repays the prescribed insurance premium. For processing of the client's payment, the Cooling-off Period service (COP) will be used. In case the COP is successfully executed, SAI contract condition accepted is set - this one will be ensured by a new UC (see 01.712 Finish contract on service execution)

Notice: Needed prerequisite of the function can be done is generating the system event in the UC 08.252 Process cooling-off period (PAYMENT team).

## 📊 Appears In (1 diagrams)

- Custom: CBL-3666 (CLM-1478) Extended Warranty Standalone
