---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_General Rules/System behavior"
domain: "Analysis Model"
element_id: 1764661
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Rules for text searching

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_General Rules/System behavior

## 📝 Notes

When text is used for searching, then system will look for exact case INSENSITIVE match. It's possible to use one special character '*' which stands for any text, but only with following limitations:
- character * is at the end of text input
- at least 3 'standard' characters has to be inserted before '*' 

When other type of text search is required, it has to be mentioned in use case specification (e.g. case sensitivity of full text).

## 🔗 Connections (1)

- ← Dependency: [[General rules for user interfaces]]

## 📊 Appears In (1 diagrams)

- Custom: General rules for system behavior
