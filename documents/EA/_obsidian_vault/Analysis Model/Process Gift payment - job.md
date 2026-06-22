---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855603
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Process Gift payment - job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Automatic job code: GIFT_PAYMENT_PROCESSING
Description: Checking conditions for granting of Gift payment benefit and processing if granted
Used for: UC 08.230

Number of starts min: 1 per day
Time of start: after processing of incoming payments
Max number of starts: not limited
Business impact: MEDIUM

## 🔗 Connections (2)

- → Dependency: [[After processing of incoming payments]]
- ← Dependency: [[08.230 Process Gift payment automatically (UseCase 1869006)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Gift payment processing
