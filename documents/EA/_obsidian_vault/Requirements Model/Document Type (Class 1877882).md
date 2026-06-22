---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8156 (CLM-2783) Integration with Inovatrics"
domain: "Requirements Model"
element_id: 1877882
diagrams: 25
connections: 26
tags:
  - class
  - requirements-model
---

# 🔷 Document Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8156 (CLM-2783) Integration with Inovatrics

## 📝 Notes

This entity contains definition of all types of documents used in the system.

## 🔗 Connections (26)

- ← Dependency: [[Document type (GUIElement 872550)]]
- ← Dependency: [[Document type (GUIElement 916621)]]
- ← Dependency: [[Document type (GUIElement 924302)]]
- ← Dependency: [[{MOD}Checking Terms of Loan]]
- ← Dependency: [[Checked document type (GUIElement 1373330)]]
- ← Dependency: [[Document Container to Document Type]]
- ← Dependency: [[Product Profile Document Rule]]
- ← Dependency: [[Product Offer Request Document Type]]
- ← Dependency: [[Document Processing Configuration]]
- ← Dependency: [[Document Type To Container]]
- ← Dependency: [[Document Type Validation (Class 1538245)]]
- ← Association: [[Salesroom Document Type]]
- ← Dependency: [[TempAppl Document]]
- ← Dependency: [[{DEL}TickedClientDocumentType (Class 1816570)]]
- ← Dependency: [[{DEL}ClientDocumentType (Class 1816564)]]
- ← Association: [[Service To Document Type]]
- → NoteLink: [[Logical Data Model _Document - Common]]
- ← Aggregation: [[Document Type Attribute (Class 1877886)]]
- → Dependency: [[Multi Photo Format Type (Enumeration 1877891)]]
- → Dependency: [[Document Owner Type (Class 1877888)]]
- ← Aggregation: [[Document Type Flag (Class 1877883)]]
- ← Aggregation: [[Document Type Page Specification (Class 1877887)]]
- ← Association: [[Product Document Printout]]
- ← Usage: [[Supplement Document Type (Class 1879273)]]
- ← Usage: [[Person Document Type (Class 1879271)]]
- ← Association: [[Document (Class 1879966)]]

## 📊 Appears In (25 diagrams)

- Custom: CBL-8156 (CSI-155) Integration with Inovatrics - extension of document type definition (step2)
- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: CEL Rewards request
- Logical: Change due date request
- Logical: Checking Terms of Loan setting
- Logical: CustomerOfferWS - GetCodeList
- Logical: Document 
- Logical: Document Container
- Logical: Document Type
- Logical: Document Type Validation
- Logical: Documentation Configuration
- Logical: Early repayment request
- Logical: Loan Origination Configuration
- Logical: Loan Service Request domain
- Logical: Loan Service Structure
- Logical: Payment holiday request
- Logical: Product Management
- Logical: Product Offers generated for External system
- Logical: Salesroom
- Logical: Supplement Definition
- Logical: Supplement definition domain - Logical data model
- Logical: Supplement definition for Collection tool service
- Logical: Supplement definition for Credit limit change
- Logical: Supplement definition for Loan restructuring
- Logical: Temporary Application - document

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Text |  |
| Active | boolean | true |
| Owner | Document Owner Type |  |
| Sort Order | Number |  |
| BarCodePrefix | Char[2] |  |
| Security level | number |  |
| Multi Photo Format | Multi Photo Format Type |  |
