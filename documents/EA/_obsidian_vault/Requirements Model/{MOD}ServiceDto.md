---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5137 (PH) Unique identifier for product service"
domain: "Requirements Model"
element_id: 1881087
diagrams: 6
connections: 8
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}ServiceDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5137 (PH) Unique identifier for product service

## 🔗 Connections (8)

- ← Dependency: [[ProductExportDto]]
- → Realisation: [[{MOD}GET services]]
- → Dependency: [[ServiceParametersDto (Class 1881096)]]
- → Dependency: [[ServiceDocumentPrintoutDto]]
- → Dependency: [[SalesDescriptionDto]]
- ← Dependency: [[ServiceResponse]]
- → Dependency: [[QualificationCriterionDto]]
- → Dependency: [[SubventionDto (Class 1881075)]]

## 📊 Appears In (6 diagrams)

- Custom: One Level Requirement Hierarchy
- Custom: PCG-5619 BRVN-550 - Revise the ET fee setup for CLX contracts
- Logical: Product catalog export/import
- Logical: Service
- Logical: Service Types
- Logical: ServiceDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| activationDate | string |  |
| approvalDocument | string |  |
| category | string |  |
| code | string |  |
| currency | string |  |
| description | string |  |
| documentPrintouts | ServiceDocumentPrintoutDto |  |
| eligibilityContainers | string |  |
| exclusiveServices | string |  |
| inclusiveServices | string |  |
| mandatoryOnContract | boolean |  |
| manualCancellationAllowed | boolean |  |
| manualTerminationAllowed | boolean |  |
| minDaysOfServiceUsage | int |  |
| name | string |  |
| parameters | ServiceParametersDto |  |
| plannedActivationDate | string |  |
| qualificationCriteria | QualificationCriterionDto |  |
| subventions | SubventionDto |  |
| tariffCode | string |  |
| terminationDate | string |  |
| termsAndConditions | string |  |
| typeCode | string |  |
| typeFlags | string |  |
| typeName | string |  |
| validFrom | string |  |
| validTo | string |  |
| versionNumber | int |  |
| versionStatus | string |  |
| limitMinInstallments | int |  |
| limitMaxInstallments | int |  |
| cancelationServices | string |  |
| limitMinCreditAmount | int |  |
| limitMaxCreditAmount | int |  |
| forAdditionalOffer | boolean |  |
| additionalOfferExpiration | int |  |
| limitCancellationToCOP | boolean |  |
| limitTerminationOutOfCOP | boolean |  |
| salesDescriptions | SalesDescriptionDto |  |
| {ADD}updatedByEmployeeNumber | string |  |
| {ADD}feeExemptionServices | string |  |
