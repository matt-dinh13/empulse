---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2621 (CLM-1276) Financing schemes IV - Subventions for REL"
domain: "Requirements Model"
element_id: 1252519
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Adding subvention into ActivateAccount call

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2621 (CLM-1276) Financing schemes IV - Subventions for REL

## 📝 Notes

The Subsidy amount need to be received from CLM for initial transactions and provided to PAY via the DisbursementMessage.  
CLM will provide the Subvention amount via AccountManagementWS.ActivateAccount. Only Subvention of type = PARTNER is used for that.
The element TransactionDto - Attributes.AttributesDto will be updated to include new optional key "subsidy".
This applies to IPD transactions only.

## 🔗 Connections (1)

- ← Realisation: [[{MOD}01.187 Sign contract]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-2621 (CLM-1276) Financing schemes IV - Subventions for REL
