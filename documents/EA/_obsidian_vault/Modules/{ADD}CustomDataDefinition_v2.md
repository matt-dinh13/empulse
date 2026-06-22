---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-769 INSR - Custom data validation API"
domain: "Modules"
element_id: 1705461
diagrams: 3
connections: 4
tags:
  - class
  - modules
---

# 🔷 {ADD}CustomDataDefinition_v2

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-769 INSR - Custom data validation API

## 📝 Notes

{ADD CSI-769 /}
Data source for this entity is Insurance Custom Data Def entity of the related Insurance Program

## 🔗 Connections (4)

- ← Usage: [[InsuranceProgramBase]]
- ← Usage: [[InsuranceProgramDetail]]
- → Dependency: [[{ADD}CustomDataType_v2]]
- ← Usage: [[InsuranceProgramBase (Class 1705452)]]

## 📊 Appears In (3 diagrams)

- Logical: CSI-769 INSR - Custom data validation API
- Logical: InsuranceProgramBase response
- Logical: InsuranceProgramDetail response

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| dataType | CustomDataType |  |
| lengthMin | int |  |
| name | string |  |
| lengthMax | int |  |
| valueMin | decimal |  |
| valueMax | decimal |  |
| invalidMessage | string |  |
| required | boolean |  |
