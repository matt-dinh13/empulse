---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/UseCase Model"
domain: "Analysis Model"
element_id: 1335465
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Data custom formats

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/UseCase Model

## 📝 Notes

Description: 

Input: 
- parameter

Output: 
- formatted parameter

Steps:

	
- Format message parameter as follows
- if message parameter "title" has value "Male" or 'M' then replace value by localized value CLI_SALUTATION_MAN
- if message parameter "title" has value "Female" or 'F' then replace value by localized value CLI_SALUTATION_WOMAN
- if message parameter "nextDueDate" format as dd-mm-yy

       (Note: e.g. defined in property file: parametersCustom-indonesia.properties)

	
- Return formatted parameter

## 🔗 Connections (1)

- ← Dependency: [[Compose SMS message]]

## 📊 Appears In (1 diagrams)

- Use Case: SMS notification
