---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10452 (CLM-3304) [HomeX] Change Communication Management REST service to follow current behavior on BSL"
domain: "Requirements Model"
element_id: 1558106
diagrams: 3
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}communicationRecordType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10452 (CLM-3304) [HomeX] Change Communication Management REST service to follow current behavior on BSL

## 📝 Notes

Communication record object

## 🔗 Connections (4)

- → Dependency: [[communicationResultPartType]]
- → Association: [[ChoiceGroup]]
- ← Dependency: [[communicationEventType]]
- ← Dependency: [[CommunicationEventType]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-10452 (CLM-3304) [HomeX] Change Communication Management REST service to follow current behavior on BSL
- Logical: Communications
- Logical: CRMFile

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| communicationResultPart | communicationResultPartType |  |
| {MOD}communicationResultTypeCode | string |  |
| communicationStatusCode | string |  |
| communicationSubtypeCode | string |  |
| communicationTypeCode | string |  |
| contractNumber | string |  |
| note | string |  |
| originalCreateBy | string |  |
| originalCreateDate | dateTime |  |
| communicationSubtypeSpecificationCode | string |  |
| communicationSubtypeSubspecificationCode | string |  |
