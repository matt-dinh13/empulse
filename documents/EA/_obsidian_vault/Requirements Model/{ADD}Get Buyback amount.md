---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1548 (CLM-936) Buyback Phase 1"
domain: "Requirements Model"
element_id: 1878548
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Get Buyback amount

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1548 (CLM-936) Buyback Phase 1

## 📝 Notes

{ADD CLM-936 /}
This rule describes finding out a document of 'USED_PHONE_DETAILS' type where purchase price of mobile is determined (Buyback mobile project)
Input parameters:

	
- Contract


Output:

	
- BuybackAmount


Steps:

	
- Get active Document of Document Type = 'USED_PHONE_DETAILS' related to Contract (via Contract Document) where Contract Code = Contract.Contract Code
	
- If the Document is found, and the Document.Document Attribute.Value for Document Attribute Type = 'DEV_TR_VAL' is decimal value greater than 0 (zero), then set BuybackAmount = Document Attribute.Value.
	
- If such Document is not found or an error happen, set BuybackAmount = 0

## 🔗 Connections (1)

- ← Dependency: [[{MOD}05.090 Generate outgoing payment for contract]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-1548 (CLM-936) Buyback Phase 1
- Use Case: Generate and Cancel outgoing payments
