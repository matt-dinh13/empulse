---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Business rules"
domain: "Analysis Model"
element_id: 865584
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Bank search criteria evaluation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Business rules

## 📝 Notes

Inserted search criteria are evaluated using logical multiplication (AND). This rule has two exceptions:

	
- Fields "DD Provider", "DD Client" and "ECS Client" which are mutually exclusive work among themselves as logical addition (OR). In relation to other criteria this group of three is again evaluated with AND and it's evaluated always (i.e. if none of these options is selected, then it's not possible to find any records).
	
- Field "Direct Debit Provider" is combined with field "DD Client" only and reduces set of DD clients which are found. Logically said If "DD Client" is checked then any bank which is of DD Client type can be found. If also "Direct Debit Provider" is selected, then only banks which are of DD Client type and their DD provider is bank selected in field "Direct Debit Provider" can be found.


Evaluation examples:
"Bank name" AND "Bank status" AND ("DD Provider" OR "DD Client" OR "ECS Client")
"Bank name" AND ("ECS Client" OR ("DD Client" AND "Direct Debit Provider")) AND "Bank code"

## 🔗 Connections (2)

- ← Dependency: [[00.110 Find bank (UseCase 1300665)]]
- ← Dependency: [[Search criteria panel (GUIElement 1761593)]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Custom: Find bank
