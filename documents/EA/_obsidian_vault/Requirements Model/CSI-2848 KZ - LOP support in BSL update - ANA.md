---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/KZ BSL/CBL-21017 KZ - Suport for DOS card, corporate cards and direct transaction processing with VISA"
domain: "Requirements Model"
element_id: 1776571
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2848 KZ - LOP support in BSL update - ANA

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/KZ BSL/CBL-21017 KZ - Suport for DOS card, corporate cards and direct transaction processing with VISA

## 📝 Notes

Used endpoints documentation:

	
- https://am.kz00c2.kz.infra/cabus-am/rest/swagger-ui/index.html?urls.primaryName=public-all#/OpenAPI%20-%20Account%20endpoint/getLOPLimitBalance
	
- https://asq.kz00c2.kz.infra/advanced-sales-quotes/swagger-ui/index.html?urls.primaryName=Domain%20Endpoints%20V1#/Advanced%20Sales%20Quotes%20REST%20Domain%20Endpoints%20V1/getLopSalesQuotes
	
- https://sqs.kz00c2.kz.infra/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/sales-quote-search-controller/executeSearch-salesquote-get_1
	
- https://prc.kz00c1.kz.infra/swagger-ui/index.html#/FinancingSchemes/getFinancingSchemes
	
- https://git.homecredit.net/product/hss-integration/-/blob/master/hss-services/hss-account/hss-account-oxm/src/main/resources/net/homecredit/hss/integration/account/xsd/account/v6/AccountTransactionWS.xsd


Call examples:

	
- https://asq.vn00a1.cz.infra/advanced-sales-quotes/api/lop?cuid=868607&accountNumber=4300075822&demandedAmount=1000000&currency=VND&calculationDate=2023-12-12
	
- https://sqs.kz00c2.kz.infra/api/salesQuotes/search/findByCodeIn?codes=0bc2222d-6c9e-ee12-e063-02ca0d0a7913&codes=0bc24c5a-1e54-076b-e063-02ca0d0ad1e1&page=0&size=20
	
- https://prc.kz00c1.kz.infra/openapi/v1/financing-schemes/LOP_0-1-24_39%3A1?deps=VARIANTS


Known issues in the new integration:

	
- ASQ API doesn't return any business reason if any LOP offer cannot be generated (e.g. 'ERR_GREATER_OWN_FUNDS', 'LOP_LIMT_REACHED'). Pls ask AP/AM team for solution of that.

## 📊 Appears In (1 diagrams)

- Custom: CBL-21017 KZ - Suport for DOS card, corporate cards and direct transaction processing with VISA
