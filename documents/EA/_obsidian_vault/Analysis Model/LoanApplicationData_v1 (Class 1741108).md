---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message"
domain: "Analysis Model"
element_id: 1741108
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 LoanApplicationData_v1

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message

## 📝 Notes

Apache Kafka Message containing the client's loan application data to be distributed to consuming systems.

## 🔗 Connections (3)

- → Dependency: [[ApplicationProcessingPhase]]
- → Dependency: [[Application (Class 1741110)]]
- → Generalization: [[AsynchronousMessage]]

## 📊 Appears In (2 diagrams)

- Logical: Asynchronous Message
- Logical: LoanApplicationData_v1

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| clientCUID | string |  |
| contractCode | string |  |
| applicationProcessingPhase | ApplicationProcessingPhase |  |
| applicationSubmissionTimestamp | string |  |
| application | Application |  |
