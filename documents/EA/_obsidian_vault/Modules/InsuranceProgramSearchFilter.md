---
type: Class
stereotype: "query"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Getting Insurance Programs by search criteria"
domain: "Modules"
element_id: 1705405
diagrams: 3
connections: 3
tags:
  - class
  - modules
---

# 🔷 InsuranceProgramSearchFilter

> **Type**: Class · **Stereotype**: «query»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Getting Insurance Programs by search criteria

## 🔗 Connections (3)

- → Usage: [[InsuranceProgramVersionStatus]]
- → Usage: [[InsuranceSubjectType]]
- ← Dependency: [[InsurancePrograms (Interface 1705474)]]

## 📊 Appears In (3 diagrams)

- Logical: Getting Insurance Programs v1
- Logical: Getting Insurance Programs v2
- Logical: Request Parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sortBy | string |  |
| order | string |  |
| limit | int |  |
| offset | int |  |
| code | string |  |
| name | string |  |
| versionStatus | InsuranceProgramVersionStatus |  |
| validityRangeFrom | dateTime |  |
| validityRangeTo | dateTime |  |
| salesroomCode | string |  |
| subjectType | InsuranceSubjectType |  |
