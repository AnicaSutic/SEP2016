-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2017-02-07 16:14:40.257

-- tables
-- Table: Buyer
CREATE TABLE dbo.Buyer (
    Id int  NOT NULL IDENTITY(1, 1),
    Name varchar(150)  NOT NULL,
    Surname varchar(150)  NOT NULL,
    IdentificationNumber char(13)  NOT NULL,
    PassportNumber varchar(20)  NOT NULL,
    Address varchar(150)  NOT NULL,
    TelephoneNumber varchar(10)  NULL,
    Email varchar(50)  NOT NULL,
    CONSTRAINT PK_Buyer PRIMARY KEY  (Id)
);

-- Table: Insurance
CREATE TABLE dbo.Insurance (
    Id int  NOT NULL IDENTITY(1, 1),
    RiskCategoryId int  NOT NULL,
    StartDate datetime  NOT NULL,
    EndDate datetime  NOT NULL,
    Price decimal(20,2)  NOT NULL,
    VehicleId int  NULL,
    ResidentalBuildingId int  NULL,
    VoyageId int  NOT NULL,
    InsurancesId int  NOT NULL,
    CONSTRAINT PK_Insurance PRIMARY KEY  (Id)
);

CREATE INDEX IX_FK_Insurance_ResidentalBuilding on dbo.Insurance (ResidentalBuildingId ASC)
;

CREATE INDEX IX_FK_Insurance_Vehicle on dbo.Insurance (VehicleId ASC)
;

CREATE INDEX IX_FK_Insurance_Voyage on dbo.Insurance (VoyageId ASC)
;

CREATE INDEX IX_FK_Insurance_Insurances on dbo.Insurance (InsurancesId ASC)
;

-- Table: InsurancePolicy
CREATE TABLE dbo.InsurancePolicy (
    Id int  NOT NULL IDENTITY(1, 1),
    Price decimal(20,2)  NOT NULL,
    BuyerId int  NOT NULL,
    InsurancesId int  NOT NULL,
    CONSTRAINT PK_InsurancePolicy PRIMARY KEY  (Id)
);

CREATE INDEX IX_FK_InsurancePolicy_Buyer on dbo.InsurancePolicy (BuyerId ASC)
;

-- Table: Insurances
CREATE TABLE Insurances (
    Id int  NOT NULL IDENTITY(1, 1),
    CONSTRAINT Insurances_pk PRIMARY KEY  (Id)
);

-- Table: Insurant
CREATE TABLE dbo.Insurant (
    Id int  NOT NULL IDENTITY(1, 1),
    InsurantsId int  NOT NULL,
    Name varchar(150)  NOT NULL,
    Surname varchar(150)  NOT NULL,
    IdentificationNumber char(13)  NOT NULL,
    PassportNumber varchar(20)  NOT NULL,
    Address varchar(150)  NOT NULL,
    TelephoneNumber varchar(10)  NULL,
    CONSTRAINT PK_Insurant PRIMARY KEY  (Id)
);

CREATE INDEX IX_FK_Insurant_Insurants on dbo.Insurant (InsurantsId ASC)
;

-- Table: Insurants
CREATE TABLE dbo.Insurants (
    Id int  NOT NULL IDENTITY(1, 1),
    CONSTRAINT PK_Insurants PRIMARY KEY  (Id)
);

-- Table: Owner
CREATE TABLE Owner (
    Id int  NOT NULL IDENTITY(1, 1),
    Name varchar(150)  NOT NULL,
    Surname varchar(150)  NOT NULL,
    IdentificationNumber char(13)  NOT NULL,
    CONSTRAINT Owner_pk PRIMARY KEY  (Id)
);

-- Table: Pricelist
CREATE TABLE dbo.Pricelist (
    Id int  NOT NULL IDENTITY(1, 1),
    Description varchar(200)  NULL,
    StartDate datetime  NOT NULL,
    EndDate datetime  NOT NULL,
    CONSTRAINT PK_Pricelist PRIMARY KEY  (Id)
);

-- Table: PricelistItem
CREATE TABLE dbo.PricelistItem (
    Id int  NOT NULL IDENTITY(1, 1),
    Code char(5)  NOT NULL,
    Price decimal(20,2)  NOT NULL,
    RiskItemId int  NOT NULL,
    PricelistItemsId int  NOT NULL,
    Coefficient decimal(5,2)  NOT NULL,
    StartDate datetime  NOT NULL,
    EndDate datetime  NOT NULL,
    CONSTRAINT PK_PricelistItem PRIMARY KEY  (Id)
);

CREATE INDEX IX_FK_PricelistItem_PricelistItems on dbo.PricelistItem (PricelistItemsId ASC)
;

CREATE INDEX IX_FK_PricelistItem_RiskItem on dbo.PricelistItem (RiskItemId ASC)
;

-- Table: PricelistItems
CREATE TABLE dbo.PricelistItems (
    Id int  NOT NULL IDENTITY(1, 1),
    PricelistId int  NOT NULL,
    CONSTRAINT PK_PricelistItems PRIMARY KEY  (Id)
);

CREATE INDEX IX_FK_PricelistItems_Pricelist on dbo.PricelistItems (PricelistId ASC)
;

-- Table: ResidentalBuilding
CREATE TABLE dbo.ResidentalBuilding (
    Id int  NOT NULL IDENTITY(1, 1),
    Address varchar(20)  NOT NULL,
    SurfaceArea decimal(10,2)  NOT NULL,
    BuildingAge decimal(10,2)  NOT NULL,
    EstimatedValue decimal(12,2)  NOT NULL,
    InsuredFrom varchar(50)  NOT NULL,
    OwnerId int  NOT NULL,
    CONSTRAINT PK_ResidentalBuilding PRIMARY KEY  (Id)
);

-- Table: Risk
CREATE TABLE dbo.Risk (
    Id int  NOT NULL IDENTITY(1, 1),
    Name varchar(150)  NOT NULL,
    Name_Srb varchar(150)  NOT NULL,
    RiskCategoryId int  NOT NULL,
    CONSTRAINT PK_Risk PRIMARY KEY  (Id)
);

CREATE INDEX IX_FK_Risk_InsuranceCategory on dbo.Risk (RiskCategoryId ASC)
;

-- Table: RiskCategory
CREATE TABLE dbo.RiskCategory (
    Id int  NOT NULL IDENTITY(1, 1),
    Name varchar(150)  NOT NULL,
    Name_Srb varchar(150)  NOT NULL,
    CONSTRAINT PK_RiskCategory PRIMARY KEY  (Id)
);

-- Table: RiskItem
CREATE TABLE dbo.RiskItem (
    Id int  NOT NULL IDENTITY(1, 1),
    Name varchar(150)  NOT NULL,
    Name_Srb varchar(150)  NOT NULL,
    RiskId int  NOT NULL,
    CONSTRAINT PK_RiskItem PRIMARY KEY  (Id)
);

CREATE INDEX IX_FK_RiskItem_Risk on dbo.RiskItem (RiskId ASC)
;

-- Table: Vehicle
CREATE TABLE dbo.Vehicle (
    Id int  NOT NULL IDENTITY(1, 1),
    Package varchar(200)  NOT NULL,
    Brand varchar(20)  NOT NULL,
    Type varchar(20)  NOT NULL,
    YearOfProduction datetime  NOT NULL,
    LicensePlateNumber varchar(20)  NOT NULL,
    ChassisNumber varchar(20)  NOT NULL,
    OwnerId int  NOT NULL,
    CONSTRAINT PK_Vehicle PRIMARY KEY  (Id)
);

-- Table: Voyage
CREATE TABLE Voyage (
    Id int  NOT NULL IDENTITY(1, 1),
    Region varchar(50)  NOT NULL,
    NumberOfInsurants int  NOT NULL,
    InsurantAge int  NOT NULL,
    Sport varchar(50)  NOT NULL,
    InsuredValue varchar(50)  NOT NULL,
    InsurantsId int  NOT NULL,
    CONSTRAINT Voyage_pk PRIMARY KEY  (Id)
);

-- Table: sysdiagrams
CREATE TABLE dbo.sysdiagrams (
    name nvarchar(128)  NOT NULL,
    principal_id int  NOT NULL,
    diagram_id int  NOT NULL IDENTITY(1, 1),
    version int  NULL,
    definition varbinary(max)  NULL,
    CONSTRAINT PK_sysdiagrams PRIMARY KEY  (diagram_id)
);

-- foreign keys
-- Reference: FK_InsurancePolicy_Buyer (table: InsurancePolicy)
ALTER TABLE dbo.InsurancePolicy ADD CONSTRAINT FK_InsurancePolicy_Buyer
    FOREIGN KEY (BuyerId)
    REFERENCES dbo.Buyer (Id);

-- Reference: FK_Insurance_InsuranceCategory (table: Insurance)
ALTER TABLE dbo.Insurance ADD CONSTRAINT FK_Insurance_InsuranceCategory
    FOREIGN KEY (RiskCategoryId)
    REFERENCES dbo.RiskCategory (Id);

-- Reference: FK_Insurance_ResidentalBuilding (table: Insurance)
ALTER TABLE dbo.Insurance ADD CONSTRAINT FK_Insurance_ResidentalBuilding
    FOREIGN KEY (ResidentalBuildingId)
    REFERENCES dbo.ResidentalBuilding (Id);

-- Reference: FK_Insurance_Vehicle (table: Insurance)
ALTER TABLE dbo.Insurance ADD CONSTRAINT FK_Insurance_Vehicle
    FOREIGN KEY (VehicleId)
    REFERENCES dbo.Vehicle (Id);

-- Reference: FK_Insurant_Insurants (table: Insurant)
ALTER TABLE dbo.Insurant ADD CONSTRAINT FK_Insurant_Insurants
    FOREIGN KEY (InsurantsId)
    REFERENCES dbo.Insurants (Id);

-- Reference: FK_PricelistItem_PricelistItems (table: PricelistItem)
ALTER TABLE dbo.PricelistItem ADD CONSTRAINT FK_PricelistItem_PricelistItems
    FOREIGN KEY (PricelistItemsId)
    REFERENCES dbo.PricelistItems (Id);

-- Reference: FK_PricelistItem_RiskItem (table: PricelistItem)
ALTER TABLE dbo.PricelistItem ADD CONSTRAINT FK_PricelistItem_RiskItem
    FOREIGN KEY (RiskItemId)
    REFERENCES dbo.RiskItem (Id);

-- Reference: FK_PricelistItems_Pricelist (table: PricelistItems)
ALTER TABLE dbo.PricelistItems ADD CONSTRAINT FK_PricelistItems_Pricelist
    FOREIGN KEY (PricelistId)
    REFERENCES dbo.Pricelist (Id);

-- Reference: FK_RiskItem_Risk (table: RiskItem)
ALTER TABLE dbo.RiskItem ADD CONSTRAINT FK_RiskItem_Risk
    FOREIGN KEY (RiskId)
    REFERENCES dbo.Risk (Id);

-- Reference: FK_Risk_InsuranceCategory (table: Risk)
ALTER TABLE dbo.Risk ADD CONSTRAINT FK_Risk_InsuranceCategory
    FOREIGN KEY (RiskCategoryId)
    REFERENCES dbo.RiskCategory (Id);

-- Reference: InsurancePolicy_Insurances (table: InsurancePolicy)
ALTER TABLE dbo.InsurancePolicy ADD CONSTRAINT InsurancePolicy_Insurances
    FOREIGN KEY (InsurancesId)
    REFERENCES Insurances (Id);

-- Reference: Insurance_Insurants (table: Insurance)
ALTER TABLE dbo.Insurance ADD CONSTRAINT Insurance_Insurants
    FOREIGN KEY (InsurancesId)
    REFERENCES Insurances (Id);

-- Reference: Insurance_Voyage (table: Insurance)
ALTER TABLE dbo.Insurance ADD CONSTRAINT Insurance_Voyage
    FOREIGN KEY (VoyageId)
    REFERENCES Voyage (Id);

-- Reference: ResidentalBuilding_Owner (table: ResidentalBuilding)
ALTER TABLE dbo.ResidentalBuilding ADD CONSTRAINT ResidentalBuilding_Owner
    FOREIGN KEY (OwnerId)
    REFERENCES Owner (Id);

-- Reference: Vehicle_Owner (table: Vehicle)
ALTER TABLE dbo.Vehicle ADD CONSTRAINT Vehicle_Owner
    FOREIGN KEY (OwnerId)
    REFERENCES Owner (Id);

-- Reference: Voyage_Insurants (table: Voyage)
ALTER TABLE Voyage ADD CONSTRAINT Voyage_Insurants
    FOREIGN KEY (InsurantsId)
    REFERENCES dbo.Insurants (Id);

-- End of file.

