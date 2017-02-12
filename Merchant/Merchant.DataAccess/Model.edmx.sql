
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 02/12/2017 20:02:52
-- Generated from EDMX file: E:\Faks\Master\sep\new\git\git\Merchant\Merchant.DataAccess\Model.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [MerchantDB];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_Insurance_InsuranceCategory]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Insurance] DROP CONSTRAINT [FK_Insurance_InsuranceCategory];
GO
IF OBJECT_ID(N'[dbo].[FK_Insurance_ResidentalBuilding]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Insurance] DROP CONSTRAINT [FK_Insurance_ResidentalBuilding];
GO
IF OBJECT_ID(N'[dbo].[FK_Insurance_Vehicle]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Insurance] DROP CONSTRAINT [FK_Insurance_Vehicle];
GO
IF OBJECT_ID(N'[dbo].[FK_InsurancePolicy_Buyer]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[InsurancePolicy] DROP CONSTRAINT [FK_InsurancePolicy_Buyer];
GO
IF OBJECT_ID(N'[dbo].[FK_PricelistItem_PricelistItems]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PricelistItem] DROP CONSTRAINT [FK_PricelistItem_PricelistItems];
GO
IF OBJECT_ID(N'[dbo].[FK_PricelistItem_RiskItem]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PricelistItem] DROP CONSTRAINT [FK_PricelistItem_RiskItem];
GO
IF OBJECT_ID(N'[dbo].[FK_PricelistItems_Pricelist]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PricelistItems] DROP CONSTRAINT [FK_PricelistItems_Pricelist];
GO
IF OBJECT_ID(N'[dbo].[FK_Risk_InsuranceCategory]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Risk] DROP CONSTRAINT [FK_Risk_InsuranceCategory];
GO
IF OBJECT_ID(N'[dbo].[FK_RiskItem_Risk]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[RiskItem] DROP CONSTRAINT [FK_RiskItem_Risk];
GO
IF OBJECT_ID(N'[dbo].[FK_Insurance_InsurancePolicy]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Insurance] DROP CONSTRAINT [FK_Insurance_InsurancePolicy];
GO
IF OBJECT_ID(N'[dbo].[FK_Insurance_Voyage]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Insurance] DROP CONSTRAINT [FK_Insurance_Voyage];
GO
IF OBJECT_ID(N'[dbo].[FK_Insurant_InsurancePolicy]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Insurant] DROP CONSTRAINT [FK_Insurant_InsurancePolicy];
GO
IF OBJECT_ID(N'[dbo].[FK_ResidentalBuilding_Owner]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ResidentalBuilding] DROP CONSTRAINT [FK_ResidentalBuilding_Owner];
GO
IF OBJECT_ID(N'[dbo].[FK_Vehicle_Owner]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Vehicle] DROP CONSTRAINT [FK_Vehicle_Owner];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Buyer]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Buyer];
GO
IF OBJECT_ID(N'[dbo].[Insurance]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Insurance];
GO
IF OBJECT_ID(N'[dbo].[InsurancePolicy]', 'U') IS NOT NULL
    DROP TABLE [dbo].[InsurancePolicy];
GO
IF OBJECT_ID(N'[dbo].[Insurant]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Insurant];
GO
IF OBJECT_ID(N'[dbo].[Owner]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Owner];
GO
IF OBJECT_ID(N'[dbo].[Pricelist]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Pricelist];
GO
IF OBJECT_ID(N'[dbo].[PricelistItem]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PricelistItem];
GO
IF OBJECT_ID(N'[dbo].[PricelistItems]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PricelistItems];
GO
IF OBJECT_ID(N'[dbo].[ResidentalBuilding]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ResidentalBuilding];
GO
IF OBJECT_ID(N'[dbo].[Risk]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Risk];
GO
IF OBJECT_ID(N'[dbo].[RiskCategory]', 'U') IS NOT NULL
    DROP TABLE [dbo].[RiskCategory];
GO
IF OBJECT_ID(N'[dbo].[RiskItem]', 'U') IS NOT NULL
    DROP TABLE [dbo].[RiskItem];
GO
IF OBJECT_ID(N'[dbo].[sysdiagrams]', 'U') IS NOT NULL
    DROP TABLE [dbo].[sysdiagrams];
GO
IF OBJECT_ID(N'[dbo].[Vehicle]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Vehicle];
GO
IF OBJECT_ID(N'[dbo].[Voyage]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Voyage];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Buyer'
CREATE TABLE [dbo].[Buyer] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(150)  NOT NULL,
    [Surname] varchar(150)  NOT NULL,
    [IdentificationNumber] char(13)  NOT NULL,
    [PassportNumber] varchar(20)  NOT NULL,
    [Address] varchar(150)  NOT NULL,
    [TelephoneNumber] varchar(10)  NULL,
    [Email] varchar(50)  NOT NULL
);
GO

-- Creating table 'Insurance'
CREATE TABLE [dbo].[Insurance] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [RiskCategoryId] int  NOT NULL,
    [StartDate] datetime  NOT NULL,
    [EndDate] datetime  NOT NULL,
    [Price] decimal(20,2)  NOT NULL,
    [VehicleId] int  NULL,
    [ResidentalBuildingId] int  NULL,
    [VoyageId] int  NULL,
    [InsurancePolicyId] int  NULL
);
GO

-- Creating table 'InsurancePolicy'
CREATE TABLE [dbo].[InsurancePolicy] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Price] decimal(20,2)  NOT NULL,
    [OrderId] varchar(50)  NOT NULL,
    [BuyerId] int  NULL,
    [IsPaymentSuccessful] bit  NOT NULL
);
GO

-- Creating table 'Insurant'
CREATE TABLE [dbo].[Insurant] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(150)  NOT NULL,
    [Surname] varchar(150)  NOT NULL,
    [IdentificationNumber] char(13)  NOT NULL,
    [PassportNumber] varchar(20)  NOT NULL,
    [Address] varchar(150)  NOT NULL,
    [TelephoneNumber] varchar(10)  NULL,
    [InsurancePolicyId] int  NOT NULL
);
GO

-- Creating table 'Owner'
CREATE TABLE [dbo].[Owner] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(150)  NOT NULL,
    [Surname] varchar(150)  NOT NULL,
    [IdentificationNumber] char(13)  NOT NULL
);
GO

-- Creating table 'Pricelist'
CREATE TABLE [dbo].[Pricelist] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Description] varchar(200)  NULL,
    [StartDate] datetime  NOT NULL,
    [EndDate] datetime  NOT NULL
);
GO

-- Creating table 'PricelistItem'
CREATE TABLE [dbo].[PricelistItem] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Code] char(5)  NOT NULL,
    [Price] decimal(20,2)  NOT NULL,
    [RiskItemId] int  NOT NULL,
    [PricelistItemsId] int  NOT NULL,
    [Coefficient] decimal(5,2)  NOT NULL,
    [StartDate] datetime  NOT NULL,
    [EndDate] datetime  NOT NULL
);
GO

-- Creating table 'PricelistItems'
CREATE TABLE [dbo].[PricelistItems] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [PricelistId] int  NOT NULL
);
GO

-- Creating table 'ResidentalBuilding'
CREATE TABLE [dbo].[ResidentalBuilding] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Address] varchar(20)  NOT NULL,
    [SurfaceArea] decimal(10,2)  NOT NULL,
    [BuildingAge] decimal(10,2)  NOT NULL,
    [EstimatedValue] decimal(12,2)  NOT NULL,
    [InsuredFrom] varchar(50)  NOT NULL,
    [OwnerId] int  NOT NULL
);
GO

-- Creating table 'Risk'
CREATE TABLE [dbo].[Risk] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(150)  NOT NULL,
    [Name_Srb] varchar(150)  NOT NULL,
    [RiskCategoryId] int  NOT NULL
);
GO

-- Creating table 'RiskCategory'
CREATE TABLE [dbo].[RiskCategory] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(150)  NOT NULL,
    [Name_Srb] varchar(150)  NOT NULL
);
GO

-- Creating table 'RiskItem'
CREATE TABLE [dbo].[RiskItem] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(150)  NOT NULL,
    [Name_Srb] varchar(150)  NOT NULL,
    [RiskId] int  NOT NULL
);
GO

-- Creating table 'sysdiagrams'
CREATE TABLE [dbo].[sysdiagrams] (
    [name] nvarchar(128)  NOT NULL,
    [principal_id] int  NOT NULL,
    [diagram_id] int IDENTITY(1,1) NOT NULL,
    [version] int  NULL,
    [definition] varbinary(max)  NULL
);
GO

-- Creating table 'Vehicle'
CREATE TABLE [dbo].[Vehicle] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Package] varchar(200)  NOT NULL,
    [Brand] varchar(20)  NOT NULL,
    [Type] varchar(20)  NOT NULL,
    [YearOfProduction] int  NOT NULL,
    [LicensePlateNumber] varchar(20)  NOT NULL,
    [ChassisNumber] varchar(20)  NOT NULL,
    [OwnerId] int  NOT NULL
);
GO

-- Creating table 'Voyage'
CREATE TABLE [dbo].[Voyage] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Region] varchar(50)  NOT NULL,
    [NumberOfInsurants] int  NOT NULL,
    [InsurantAge] varchar(50)  NOT NULL,
    [Sport] varchar(50)  NOT NULL,
    [InsuredValue] varchar(50)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Buyer'
ALTER TABLE [dbo].[Buyer]
ADD CONSTRAINT [PK_Buyer]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Insurance'
ALTER TABLE [dbo].[Insurance]
ADD CONSTRAINT [PK_Insurance]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'InsurancePolicy'
ALTER TABLE [dbo].[InsurancePolicy]
ADD CONSTRAINT [PK_InsurancePolicy]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Insurant'
ALTER TABLE [dbo].[Insurant]
ADD CONSTRAINT [PK_Insurant]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Owner'
ALTER TABLE [dbo].[Owner]
ADD CONSTRAINT [PK_Owner]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Pricelist'
ALTER TABLE [dbo].[Pricelist]
ADD CONSTRAINT [PK_Pricelist]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PricelistItem'
ALTER TABLE [dbo].[PricelistItem]
ADD CONSTRAINT [PK_PricelistItem]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PricelistItems'
ALTER TABLE [dbo].[PricelistItems]
ADD CONSTRAINT [PK_PricelistItems]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ResidentalBuilding'
ALTER TABLE [dbo].[ResidentalBuilding]
ADD CONSTRAINT [PK_ResidentalBuilding]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Risk'
ALTER TABLE [dbo].[Risk]
ADD CONSTRAINT [PK_Risk]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'RiskCategory'
ALTER TABLE [dbo].[RiskCategory]
ADD CONSTRAINT [PK_RiskCategory]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'RiskItem'
ALTER TABLE [dbo].[RiskItem]
ADD CONSTRAINT [PK_RiskItem]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [diagram_id] in table 'sysdiagrams'
ALTER TABLE [dbo].[sysdiagrams]
ADD CONSTRAINT [PK_sysdiagrams]
    PRIMARY KEY CLUSTERED ([diagram_id] ASC);
GO

-- Creating primary key on [Id] in table 'Vehicle'
ALTER TABLE [dbo].[Vehicle]
ADD CONSTRAINT [PK_Vehicle]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Voyage'
ALTER TABLE [dbo].[Voyage]
ADD CONSTRAINT [PK_Voyage]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [BuyerId] in table 'InsurancePolicy'
ALTER TABLE [dbo].[InsurancePolicy]
ADD CONSTRAINT [FK_InsurancePolicy_Buyer]
    FOREIGN KEY ([BuyerId])
    REFERENCES [dbo].[Buyer]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_InsurancePolicy_Buyer'
CREATE INDEX [IX_FK_InsurancePolicy_Buyer]
ON [dbo].[InsurancePolicy]
    ([BuyerId]);
GO

-- Creating foreign key on [RiskCategoryId] in table 'Insurance'
ALTER TABLE [dbo].[Insurance]
ADD CONSTRAINT [FK_Insurance_InsuranceCategory]
    FOREIGN KEY ([RiskCategoryId])
    REFERENCES [dbo].[RiskCategory]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Insurance_InsuranceCategory'
CREATE INDEX [IX_FK_Insurance_InsuranceCategory]
ON [dbo].[Insurance]
    ([RiskCategoryId]);
GO

-- Creating foreign key on [ResidentalBuildingId] in table 'Insurance'
ALTER TABLE [dbo].[Insurance]
ADD CONSTRAINT [FK_Insurance_ResidentalBuilding]
    FOREIGN KEY ([ResidentalBuildingId])
    REFERENCES [dbo].[ResidentalBuilding]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Insurance_ResidentalBuilding'
CREATE INDEX [IX_FK_Insurance_ResidentalBuilding]
ON [dbo].[Insurance]
    ([ResidentalBuildingId]);
GO

-- Creating foreign key on [VehicleId] in table 'Insurance'
ALTER TABLE [dbo].[Insurance]
ADD CONSTRAINT [FK_Insurance_Vehicle]
    FOREIGN KEY ([VehicleId])
    REFERENCES [dbo].[Vehicle]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Insurance_Vehicle'
CREATE INDEX [IX_FK_Insurance_Vehicle]
ON [dbo].[Insurance]
    ([VehicleId]);
GO

-- Creating foreign key on [InsurancePolicyId] in table 'Insurance'
ALTER TABLE [dbo].[Insurance]
ADD CONSTRAINT [FK_Insurance_InsurancePolicy]
    FOREIGN KEY ([InsurancePolicyId])
    REFERENCES [dbo].[InsurancePolicy]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Insurance_InsurancePolicy'
CREATE INDEX [IX_FK_Insurance_InsurancePolicy]
ON [dbo].[Insurance]
    ([InsurancePolicyId]);
GO

-- Creating foreign key on [VoyageId] in table 'Insurance'
ALTER TABLE [dbo].[Insurance]
ADD CONSTRAINT [FK_Insurance_Voyage]
    FOREIGN KEY ([VoyageId])
    REFERENCES [dbo].[Voyage]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Insurance_Voyage'
CREATE INDEX [IX_FK_Insurance_Voyage]
ON [dbo].[Insurance]
    ([VoyageId]);
GO

-- Creating foreign key on [InsurancePolicyId] in table 'Insurant'
ALTER TABLE [dbo].[Insurant]
ADD CONSTRAINT [FK_Insurant_InsurancePolicy]
    FOREIGN KEY ([InsurancePolicyId])
    REFERENCES [dbo].[InsurancePolicy]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Insurant_InsurancePolicy'
CREATE INDEX [IX_FK_Insurant_InsurancePolicy]
ON [dbo].[Insurant]
    ([InsurancePolicyId]);
GO

-- Creating foreign key on [OwnerId] in table 'ResidentalBuilding'
ALTER TABLE [dbo].[ResidentalBuilding]
ADD CONSTRAINT [FK_ResidentalBuilding_Owner]
    FOREIGN KEY ([OwnerId])
    REFERENCES [dbo].[Owner]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ResidentalBuilding_Owner'
CREATE INDEX [IX_FK_ResidentalBuilding_Owner]
ON [dbo].[ResidentalBuilding]
    ([OwnerId]);
GO

-- Creating foreign key on [OwnerId] in table 'Vehicle'
ALTER TABLE [dbo].[Vehicle]
ADD CONSTRAINT [FK_Vehicle_Owner]
    FOREIGN KEY ([OwnerId])
    REFERENCES [dbo].[Owner]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Vehicle_Owner'
CREATE INDEX [IX_FK_Vehicle_Owner]
ON [dbo].[Vehicle]
    ([OwnerId]);
GO

-- Creating foreign key on [PricelistId] in table 'PricelistItems'
ALTER TABLE [dbo].[PricelistItems]
ADD CONSTRAINT [FK_PricelistItems_Pricelist]
    FOREIGN KEY ([PricelistId])
    REFERENCES [dbo].[Pricelist]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PricelistItems_Pricelist'
CREATE INDEX [IX_FK_PricelistItems_Pricelist]
ON [dbo].[PricelistItems]
    ([PricelistId]);
GO

-- Creating foreign key on [PricelistItemsId] in table 'PricelistItem'
ALTER TABLE [dbo].[PricelistItem]
ADD CONSTRAINT [FK_PricelistItem_PricelistItems]
    FOREIGN KEY ([PricelistItemsId])
    REFERENCES [dbo].[PricelistItems]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PricelistItem_PricelistItems'
CREATE INDEX [IX_FK_PricelistItem_PricelistItems]
ON [dbo].[PricelistItem]
    ([PricelistItemsId]);
GO

-- Creating foreign key on [RiskItemId] in table 'PricelistItem'
ALTER TABLE [dbo].[PricelistItem]
ADD CONSTRAINT [FK_PricelistItem_RiskItem]
    FOREIGN KEY ([RiskItemId])
    REFERENCES [dbo].[RiskItem]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PricelistItem_RiskItem'
CREATE INDEX [IX_FK_PricelistItem_RiskItem]
ON [dbo].[PricelistItem]
    ([RiskItemId]);
GO

-- Creating foreign key on [RiskCategoryId] in table 'Risk'
ALTER TABLE [dbo].[Risk]
ADD CONSTRAINT [FK_Risk_InsuranceCategory]
    FOREIGN KEY ([RiskCategoryId])
    REFERENCES [dbo].[RiskCategory]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Risk_InsuranceCategory'
CREATE INDEX [IX_FK_Risk_InsuranceCategory]
ON [dbo].[Risk]
    ([RiskCategoryId]);
GO

-- Creating foreign key on [RiskId] in table 'RiskItem'
ALTER TABLE [dbo].[RiskItem]
ADD CONSTRAINT [FK_RiskItem_Risk]
    FOREIGN KEY ([RiskId])
    REFERENCES [dbo].[Risk]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RiskItem_Risk'
CREATE INDEX [IX_FK_RiskItem_Risk]
ON [dbo].[RiskItem]
    ([RiskId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------