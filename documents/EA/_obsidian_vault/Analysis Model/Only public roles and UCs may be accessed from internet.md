---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Access control/Business Rules"
domain: "Analysis Model"
element_id: 626570
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Only public roles and UCs may be accessed from internet

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Access control/Business Rules

## 📝 Notes

Access from intranet to a use case will be granted if:

	
- user possesses a public or secure role mapped to the use case and the role is mapped to the use case as public or secure


Access from internet to a use case will be granted if:

	
- user possesses a public role mapped to the use case where also mapping of the role to the use case is public 


Access is denied in all other cases.

Intranet/Internet access is distinguished in HTTP request header on web server in APP_SCOPE property.

## 🔗 Connections (1)

- ← Dependency: [[Access control]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
