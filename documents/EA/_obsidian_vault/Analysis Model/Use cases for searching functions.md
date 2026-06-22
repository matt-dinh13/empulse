---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_General Rules/System behavior"
domain: "Analysis Model"
element_id: 1764653
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Use cases for searching functions

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_General Rules/System behavior

## 📝 Notes

If the search finds only one record, then its detail will be shown automatically.

Every search use case will be able to take search parameters as input criteria and if required, then it will display results grid immediately after execution.

When text is used for searching, then system will look for exact case INSENSITIVE match. It's possible to use one special character '*' which stands for any text, but only with following limitations:
- character * is at the end of text input
- at least 3 'standard' characters has to be inserted before '*' 

Sorting of result grid:

	
- Search result, which is displayed in result grid is always sorted according to default column.
	
- Sort result can be reordered according to another attribute with clicking on column (attribute) label. 
	
- Repeated click on search button 'resets' search sorting on default column 
	
- Sorting of strings is always case insensitive (letters are sorted alphabetically regardless on case)


When other type of text search is required, it has to be mentioned in use case specification (e.g. case sensitivity of full text).
If no input criteria is inserted, then error MSG_0012 will be displayed to user. 

If search result is empty then MSG_0013 will be displayed to user in the search result area.

## 🔗 Connections (1)

- ← Dependency: [[General rules for use cases]]

## 📊 Appears In (1 diagrams)

- Custom: General rules for system behavior
