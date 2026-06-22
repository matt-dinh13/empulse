---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Interface Provided/Rabbit/csi.bsa.processing-result"
domain: "Modules"
element_id: 1861254
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 OperationProcessingResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Interface Provided/Rabbit/csi.bsa.processing-result

## 📝 Notes

A message generated for bulk operation after creation or any change of status

## 🔗 Connections (4)

- → Dependency: [[ResultStatistics]]
- → Dependency: [[StatusHistory (Class 1861256)]]
- → Dependency: [[InputData]]
- → Dependency: [[ResultStatistics]]

## 📊 Appears In (1 diagrams)

- Logical: csi.bsa.processing-result

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | number |  |
| description | string |  |
| creationDate | datetime |  |
| createdBy | string |  |
| fromTime | time |  |
| toTime | time |  |
| processingProgress | number |  |
| processingResultStatistics | ResultStatistics |  |
| status | string |  |
| statusHistory | StatusHistory |  |
| type | string |  |
| validationProgress | number |  |
| validationResultStatistics | ResultStatistics |  |
| archived | bool |  |
| inputData | InputData |  |
