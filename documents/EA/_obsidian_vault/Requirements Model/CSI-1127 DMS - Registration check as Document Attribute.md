---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions"
domain: "Requirements Model"
element_id: 1728808
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1127 DMS - Registration check as Document Attribute

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions

## 📝 Notes

Now, recording the registration check of a Document is stored in Document entity.
Due to unified approach in document updates, the registration check is supposed to be a new document attribute type.
Setting of this check will be done via the current DMS Set document attribute API
Next,  a data migration the current registration check data into document attribute structures will be needed.
Consider also how to ensure usage of privileges for various Document attributes.

## 🔗 Connections (1)

- ← Dependency: [[CSI-1122 Use DMS in Contract Supplement registration functions (Requirement 1728818)]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions
