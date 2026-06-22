---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1573580
diagrams: 0
connections: 3
tags:
  - requirement
  - _uncategorized
---

# 📋 Delete application relationship algorithm

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Removal of selected application relationships (e.g. Joint Financial Scheme (JFS) partnership etc.)

Inputs:

	
- Contract
	
- RelationshipRoleType - selected role type(s) of a relationships to be deleted


Steps:
For each Contract->Relationship[.Role_Type=RelationshipRoleType and .Archived=FALSE], system performs the following steps:
a) Sets Relationship.Archived = TRUE
b) For all Relationship -> Relationship_Attribute [Archived = FALSE] sets Archived = TRUE
c) Set Relationship -> Party  [Archived = FALSE] sets Archived = TRUE

## 🔗 Connections (3)

- ← Dependency: [[Set application default financial partnership algorithm]]
- ← Dependency: [[Update application financial partnership algorithm]]
- ← Dependency: [[01.312 Update approved application (UseCase 1879295)]]
