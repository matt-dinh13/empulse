---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Tracking of requests from user's browser/Business Rules"
domain: "Analysis Model"
element_id: 823858
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Generate a cookie for audit for user's browser

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Tracking of requests from user's browser/Business Rules

## 📝 Notes

Input:

	
- username


Output: 

	
- generated cookie


System generates a cookie for client's browser as 128-bit MD5 hash from concatenation username and current date and time

## 🔗 Connections (1)

- ← Dependency: [[Process request from user's browser]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules for Tracking of requests from user's browser
