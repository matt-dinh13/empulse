---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16491 (CSI-1432) VN BNPL - Document generation for BNPL transaction"
domain: "Requirements Model"
element_id: 1777270
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1554 - Changes in Transaction Supplement datasource

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16491 (CSI-1432) VN BNPL - Document generation for BNPL transaction

## 📝 Notes

Some of the BNPL financial data, presented in BNPL transaction documentation for customer, has to be calculated on the document generation so that data topicality is ensured.

The financial data generation is provided by following ASQ API:
https://asq.vn00a1.cz.infra/advanced-sales-quotes/swagger-ui.html#/Sales%20Quotes/getSalesQuoteRecalculationUsingGET

Next, there will be change in the printout validity setting:

	
- The generated document is valid for 1 day until midnight (00:00:00) of the next day. E.g. If the document is generated on 01/Jan/2022 22:00, then its validity is until 02/Jan/2022 00:00

## 🔗 Connections (1)

- → Generalization: [[VN BNPL - Document generation for BNPL transaction]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16491 (CSI-1432) VN BNPL - Document generation for BNPL transaction
