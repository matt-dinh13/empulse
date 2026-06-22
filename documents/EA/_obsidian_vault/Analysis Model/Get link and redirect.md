---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Dynamic link/Business rules"
domain: "Analysis Model"
element_id: 1453335
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get link and redirect

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Dynamic link/Business rules

## 📝 Notes

This rule describes how system redirects user to requested URL.

Precondition:

	
- access right for login UC00_050


Input parameters:

	
- Short URL


Output parameters:

	
- URL - to which user is forwarded


Steps:

	
- System retrieves URL from Dynamic link by Short URL
	
- System redirects user to following pages based on link:
- public-otpverification - displays OTP verification panel (use case 01.199 Display public verification panel for consent)
- otherwise - general public page

## 🔗 Connections (1)

- ← Dependency: [[Public page]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Custom: User interface model
