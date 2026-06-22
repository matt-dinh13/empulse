---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules"
domain: "Analysis Model"
element_id: 1623729
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 DMS File creation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules

## 📝 Notes

Properties of DMS file:

	
- length of filename (with file extension) can be 128 characters. If file has longer filename, system will use first X characters of filename + "." + file_extension, where X is counted as (LENGTH(filename) - LENGTH file extension)

## 🔗 Connections (2)

- ← Dependency: [[Application Processing]]
- ← Dependency: [[Generate content of agreement]]

## 📊 Appears In (2 diagrams)

- Custom: General business rules
- Use Case: CSI-1119 Use DMS in UC 08.356 Generate service request document
