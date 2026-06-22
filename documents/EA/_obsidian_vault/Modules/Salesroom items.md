---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom assignment/Business Rules"
domain: "Modules"
element_id: 1873191
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Salesroom items

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom assignment/Business Rules

## 📝 Notes

//This algorithm finds products and service assigned on salesroom either directly (product to salesroom) or through sales package (product and service to sales package, sales package to salesroom)

Input:
- salesroom

Output:
- list of products
- list of services

Steps:

// find products assigned on salesroom directly
If Product Catalog Global Parameter.UseSalesPackage (BL_USE_SALES_PACKAGE
) = fales then 
system finds all products assigned on salesroom from SalesroomProduct according these criteria:
- SalesroomProduct.SalesroomCode = salesroom
- maximum(SalesroomProduct.ValidFrom, SalesroomProduct.Product.ValidFrom) >= current date (unfilled values are ignored)
- minimum(SalesroomProduct.ValidTo, SalesroomProduct.Product.FalidTo) <= current date (unfilled values are ignored)
System add all found products to list of product
end if
// end of fining product directly

// find products and service assigned on salesroom through sales package
If Product Catalog Global Parameter.UseSalesPackage (BL_USE_SALES_PACKAGE
) = true then 
System finds all products from SalesPackageItem of sales packages on salesroom from SalesroomToSalesPackage according these criteria:
- SalesroomToSalesPackage.SalesroomCode = salesroom
- SalesPackageItem.Type = PRODUCT
- maximum(SalesPackageItem.ValidFrom, SalesroomToSalesPackage.validFrom, SalesPackageItem.Product.ValidFrom) >= current date (unfilled values are ignored)
- minimum(SalesPackageItem.ValidTo, SalesroomToSalesPackage.ValidTo, SalesPackageItem.Product.ValidTo) <= current date (unfilled values are ignored)
System add all found products to list of product

If Product Catalog Global Parameter.CheckSalesroomService (BL_CHECK_SALESROOM_SERVICE) = true then
System finds all services from from SalesPackageItem of sales packages on salesroom from SalesroomToSalesPackage according these criteria:
- SalesroomToSalesPackage.SalesroomCode = salesroom
- SalesPackageItem.Type = SERVICE
- maximum(SalesPackageItem.ValidFrom, SalesroomToSalesPackage.validFrom, SalesPackageItem.Service.ValidFrom) >= current date (unfilled values are ignored)
- minimum(SalesPackageItem.ValidTo, SalesroomToSalesPackage.ValidTo, SalesPackageItem.Service.ValidTo) <= current date (unfilled values are ignored)
System add all found services to list of service
// end of fining product and service assigned through sales package

System returns list of product and list of service.

## 🔗 Connections (1)

- ← Dependency: [[GET salesroom-assignment]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Use Case
