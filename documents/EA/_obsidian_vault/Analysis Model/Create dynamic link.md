---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Dynamic link/Business rules"
domain: "Analysis Model"
element_id: 1453336
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Create dynamic link

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Dynamic link/Business rules

## 📝 Notes

This rule describes how system generate short URL.

Input parameters:

	
- URL


Output parameters:

	
- Short URL


Steps:

	
- System generates random alphanumeric (a-zA-Z0-9) string 6 characters long
	
- System saves short URL to Dynamic link:
- URL = URL
- Short URL = domain + generated string

## 📊 Appears In (1 diagrams)

- Custom: Business rules
