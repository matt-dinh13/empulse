---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9707 Previous Application Array/LOR-10001 Add AF template to /scoring"
domain: "Requirements Model"
element_id: 1797057
diagrams: 2
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 ScoringResultDataTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9707 Previous Application Array/LOR-10001 Add AF template to /scoring

## 📝 Notes

{ADD LOR-10001}Added attribute formScope{/ADD}

## 🔗 Connections (3)

- ← Dependency: [[ScoringDataTO]]
- → Dependency: [[ScoringResultAttributeTO]]
- → Dependency: [[type]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-10001 Add AF template to /scoring
- Logical: Scoring data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| attributes | ScoringResultAttributeTO |  |
| creationDate | datetime |  |
| type | type |  |
| {ADD}formScope | string |  |
