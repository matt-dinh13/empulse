---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/User Interface Model/Collect insurance custom data"
domain: "Analysis Model"
element_id: 1473339
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Insurance custom data field 1..N

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/User Interface Model/Collect insurance custom data

## 📝 Notes

Insurance custom data fields defined for the insurance service in related insurance program (one or more custom data fields can be defined).

Definition of fields: Insurance Program[Code = Offer Financial Parameters->Offer Insurance Service.Insurance Program Code, Version = Offer Financial Parameters->Offer Insurance Service.Insurance Program Version].Insurance Custom Data Def

Labels for fields are taken from insurance custom data definition of insurance program (Insurance Custom Data Def.Label)

Field is mandatory according to insurance custom data definition of insurance program (Insurance Custom Data Def.Mandatory).

Field values are validated according to defined logical data type (Insurance Custom Data Def.Type)

LDM: Offer Insurance Custom Data[Code = Insurance Custom Data Def.Code].Value

## 📊 Appears In (1 diagrams)

- Custom: Collect insurance custom data
