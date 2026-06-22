---
type: Class
stereotype: "class"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog/Validation Rules"
domain: "Modules"
element_id: 969290
diagrams: 12
connections: 12
tags:
  - class
  - modules
---

# 🔷 Printout Template

> **Type**: Class · **Stereotype**: «class»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog/Validation Rules

## 📝 Notes

This entity defines printout templates that can be used for printing of documents.
Its a mirror of selected printout templates on PrintServer side.
To be used printout templates have to be assigned to particular document types. 

For some printouts (see the specific names in list of attributes) the internal code (PrintoutTemplate.Code) is hard coded.

## 🔗 Connections (12)

- ← Dependency: [[Printout template]]
- ← Dependency: [[Printout template (GUIElement 916629)]]
- → Dependency: [[Printout Template Definition]]
- ← Dependency: [[Document Printout]]
- ← Dependency: [[Account statement]]
- ← Dependency: [[Statement Printout Template (GUIElement 1803440)]]
- ← Dependency: [[{ADD}ACCSTMT]]
- ← Dependency: [[ACCSTMT service parameter validation]]
- ← Association: [[Service To Document Type]]
- ← Dependency: [[Revolving Loan Product Variant]]
- ← Association: [[Product Document Printout]]
- ← Association: [[Supplement Document Type (Class 1879273)]]

## 📊 Appears In (12 diagrams)

- Custom: Validation Rules
- Logical: ACCSTMT
- Logical: ACCSTMT
- Logical: Loan Origination Configuration
- Logical: Loan Service Structure
- Logical: Printout Template
- Logical: Product Management
- Logical: Supplement Definition
- Logical: Supplement definition domain - Logical data model
- Logical: Supplement definition for Collection tool service
- Logical: Supplement definition for Credit limit change
- Logical: Supplement definition for Loan restructuring

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| External Code | Shorttext |  |
| Pre Printed | Boolean | No |
| Sort order | integer |  |
| Active | Boolean | true |
