---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Logical Data Model"
domain: "Analysis Model"
element_id: 1701911
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Loan Restructuring Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Logical Data Model

## 📝 Notes

A request entity keeping parameters of particular loan service request

## 🔗 Connections (3)

- → Generalization: [[Loan Service Request (Class 1868549)]]
- → Dependency: [[Request Reason Type (Enumeration 1879266)]]
- ← Aggregation: [[Loan Restructuring Offer]]

## 📊 Appears In (2 diagrams)

- Logical: Loan restructuring request domain
- Logical: Loan Service Request domain

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| First Due Date Restructured | date |  |
| Preferred Monthly Installment | Financial Amount |  |
| Restructuring Start Date | date |  |
| Said Request Reason | Request Reason Type |  |
| Total Amount Restructured | Financial Amount |  |
| Keep Installment Amount | bool |  |
| {ADD}Principal Amount Restructured | Financial Amount |  |
| {ADD}Interest Amount Restructured | Financial Amount |  |
| {ADD}Other Amount Restructured | Financial Amount |  |
| {ADD}Restructuring Start Installment | int |  |
