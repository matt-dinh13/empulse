---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/VN/PCG-5619 BRVN-550 - Revise the ET fee setup for CLX contracts"
domain: "Requirements Model"
element_id: 1881069
diagrams: 4
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}ServiceInputDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/VN/PCG-5619 BRVN-550 - Revise the ET fee setup for CLX contracts

## 🔗 Connections (4)

- ← Dependency: [[services (Class 1881079)]]
- → Dependency: [[StringCollectionInputDto (Class 1881072)]]
- → Dependency: [[ServiceParametersDto (Class 1881096)]]
- → Dependency: [[Input (Class 1881054)]]

## 📊 Appears In (4 diagrams)

- Custom: PCG-5619 BRVN-550 - Revise the ET fee setup for CLX contracts
- Logical: Service
- Logical: Service Types
- Logical: ServiceInputDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| approvalDocument | string |  |
| code | string |  |
| validTo | string |  |
| versionStatus | Version Status |  |
| validFrom | string |  |
| typeName | string |  |
| typeFlags | string |  |
| termsAndConditions | string |  |
| terminationDate | string |  |
| tariffCode | string |  |
| subventions | Input |  |
| qualificationCriteria | Input |  |
| plannedActivationDate | string |  |
| parameters | ServiceParametersDto |  |
| name | string |  |
| minDaysOfServiceUsage | int |  |
| manualTerminationAllowed | boolean |  |
| manualCancellationAllowed | boolean |  |
| mandatoryOnContract | boolean |  |
| eligibilityContrainers | StringCollectionInputDto |  |
| documentPrintouts | Input |  |
| description | string |  |
| currency | string |  |
| category | string |  |
| activationDate | string |  |
| limitMinInstallments | int |  |
| limitMaxInstallments | int |  |
| cancelationServices | string |  |
| limitMinCreditAmount | int |  |
| limitMaxCreditAmount | int |  |
| forAdditionalOffer | boolean |  |
| additionalOfferExpiration | int |  |
| {ADD}limitCancellationToCOP | boolean |  |
| {ADD}limitTerminationOutOffCOP | boolean |  |
