---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5421 (CLM-1960) Common Agreement Attribute (Bank Service Agreement)"
domain: "Requirements Model"
element_id: 1397400
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Sending ContractCode as Common Agreement into CIF

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5421 (CLM-1960) Common Agreement Attribute (Bank Service Agreement)

## 📝 Notes

Goal of this requirement is to add contract number into customValues -> commonAgreement attribute on calling of PartyWS.CustomerPersonUpdate - see UC 06.020 Update Client Data modification.
The attribute will be only updated on the contract signature - see calling UC 06.020 Update Client Data from UC 01.187 Sign contact, i.e. Business Event Type = Create Contract.

## 📊 Appears In (1 diagrams)

- Custom: CBL-5421 (CLM-1960) Common Agreement Attribute (Bank Service Agreement)
