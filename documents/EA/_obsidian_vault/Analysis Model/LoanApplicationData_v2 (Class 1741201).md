---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message"
domain: "Analysis Model"
element_id: 1741201
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 LoanApplicationData_v2

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message

## 📝 Notes

Apache Kafka Message containing the client's loan application data to be distributed to consuming systems.

## 🔗 Connections (5)

- → Dependency: [[ScoringDataAttribute]]
- → Dependency: [[Application (Class 1741217)]]
- → Dependency: [[FinancialParameters]]
- → Generalization: [[AsynchronousMessage]]
- → Dependency: [[UserStatistic]]

## 📊 Appears In (2 diagrams)

- Logical: Asynchronous Message
- Logical: LoanApplicationData_v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| clientCUID | string |  |
| applicationCode | string |  |
| timestamp | string |  |
| application | Application |  |
| financialParameters | FinancialParameters |  |
| scoringData | ScoringDataAttribute |  |
| status | string |  |
| userStatistics | UserStatistic |  |
| substatus | string |  |
