---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872731
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Create Contract Supplement document in SUP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to generate Contract Supplement documents in SUP component. The SUP method is asynchronous so consumer is notified about the loan document generation in standard Contract Supplement Kafka topic.
Input: 

	
- contractSupplementId



	
- System calls POST method of https://sup.<environment>/rest/v1/contract-supplements/{contractSupplementId}/documents

## 🔗 Connections (1)

- ← Dependency: [[{MOD}16.040 Process Account Event notifications]]

## 📊 Appears In (3 diagrams)

- Use Case: Account origination - Use Case Model
- Use Case: SIR - Process Sales Quotes for Transaction
- Use Case: Transaction origination - Use Case Model
