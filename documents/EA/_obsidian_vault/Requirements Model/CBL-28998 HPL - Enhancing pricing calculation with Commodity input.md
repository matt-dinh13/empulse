---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/PCG/VN/PCG-5332 CBL-28998 HPL - Enhancing pricing calculation with Commodity input"
domain: "Requirements Model"
element_id: 1861188
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-28998 HPL - Enhancing pricing calculation with Commodity input

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/VN/PCG-5332 CBL-28998 HPL - Enhancing pricing calculation with Commodity input

## 📝 Notes

Requirement 1: Data Model Update - Add a new column to FIN_PACKAGE_CRITERION.

Requirement 2:   In the GUI, it will be possible to define each criterion using either:

    Positive logic – meaning the condition must be met (e.g., Model = X), or
    Negative logic (NOT IN) – meaning the condition must not be met (e.g., Model NOT IN (X, Y)).

To support this, each criterion will include a flag indicating whether it is a positive or negative condition. This allows the system to evaluate both inclusion and exclusion rules during package selection.

Ensuring Input Consistency

    If NOT IN is selected, at least one value must be provided.
    It must not be allowed to define both positive and negative criteria for the same type and value.

## 📊 Appears In (1 diagrams)

- Custom: PCG-5332 CBL-28998 HPL - Enhancing pricing calculation with Commodity input
