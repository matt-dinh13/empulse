---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753471
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 DDS - Get DD channel

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

DD channel is determined as follows:

	
- If DD mandate has ECS provider associated (DIRECT_DEBIT_STATEMENT.DDM.ECS_PROVIDER is not null) then
- if DD provider type = 'ECS', DD channel = “ECS-” + code of ECS provider (DIRECT_DEBIT_STATEMENT.DDM.ECS_PROVIDER.CODE)
- if DD provider type = 'ACH', then DD channel = “ACH-” + code of ACH provider (DIRECT_DEBIT_STATEMENT.DDM.ECS_PROVIDER.CODE)


	
- else DD channel = “DD-” + code of bank which is defined as DD provider of client's bank (DIRECT_DEBIT_STATEMENT->DDM->DD_PROVIDER.SYNCHRONIZATION_CODE)


Note: According to definition in bank management it may happen that DD provider will be the bank of client or other bank.

## 🔗 Connections (2)

- ← Dependency: [[05.130 Generate DD statements (UseCase 1863204)]]
- ← Dependency: [[05.250 Process DD statements import (UseCase 1863189)]]

## 📊 Appears In (1 diagrams)

- Use Case: Direct Debit statements
