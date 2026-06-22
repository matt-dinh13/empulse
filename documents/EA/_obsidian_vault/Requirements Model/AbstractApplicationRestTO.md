---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9105 Create a new attribute for SOB (Selling On Board)/LOR-9166 Implement createAndEvaluateApplication methods"
domain: "Requirements Model"
element_id: 1822923
diagrams: 7
connections: 13
tags:
  - class
  - requirements-model
---

# 🔷 AbstractApplicationRestTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9105 Create a new attribute for SOB (Selling On Board)/LOR-9166 Implement createAndEvaluateApplication methods

## 🔗 Connections (10)

- → Dependency: [[KeyValue]]
- → Dependency: [[Relationships (Class 1822925)]]
- → Dependency: [[RefinancedContract (Class 1822930)]]
- → Dependency: [[KeyValue]]
- → Dependency: [[ClientData (Class 1822933)]]
- → Dependency: [[KeyValue]]
- → Dependency: [[Service (Class 1822920)]]
- ← Generalization: [[UpdateApplication]]
- ← Generalization: [[CreateAndEvaluateApplication]]
- ← Generalization: [[{MOD}ApplicationDetailRestTO]]

## 📊 Appears In (7 diagrams)

- Custom: LOR-9166 Implement createAndEvaluateApplication methods
- Custom: LOR-9169 Implement updateApprovedApplication method
- Custom: LOR-9366 - Get direct debit mandate data for ApplicationManagement REST via PAYM API
- Logical: Application
- Logical: Application
- Logical: Create
- Logical: Update

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| client | ClientData |  |
| commodities | string |  |
| documents | string |  |
| relationships | Relationships |  |
| {DEL}services | Service |  |
| refinancedContracts | RefinancedContract |  |
| externalIdentificationAttributes | KeyValue |  |
| xSellOfferRequested | boolean |  |
| directDebitMandates | string |  |
| userStatistics | KeyValue |  |
| paymentChannels | string |  |
| extendedProperties | KeyValue |  |
| internalCode | string |  |
| internalCode2 | string |  |
| additionalInformationCode | string |  |
| comment | string |  |
| bankAccountOwnership | boolean |  |
| financeBankName | string |  |
| loanPurpose | string |  |
| plannedContactMode | string |  |
| salesAgentCode | string |  |
| extendedInformations | KeyValue |  |
