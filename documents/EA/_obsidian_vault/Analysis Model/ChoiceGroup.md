---
type: Class
stereotype: "XSDchoice"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Communication Management/v1.0/Communication"
domain: "Analysis Model"
element_id: 1558104
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ChoiceGroup

> **Type**: Class · **Stereotype**: «XSDchoice»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Communication Management/v1.0/Communication

## 📝 Notes

Only one of the elements contained in the ChoiceGroup (i.e. address, email, phone) to be present within the communicationRecordType.

## 🔗 Connections (3)

- → Dependency: [[addressType]]
- ← Association: [[{MOD}communicationRecordType]]
- → Dependency: [[phoneType]]

## 📊 Appears In (2 diagrams)

- Logical: Communications
- Logical: CRMFile

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| address | addressType |  |
| email | string |  |
| phone | phoneType |  |
