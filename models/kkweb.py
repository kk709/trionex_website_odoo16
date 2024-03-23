from odoo import api, fields, models


class KkWebsiteModel(models.Model):
    _name = "trionex.website"
    _description = "Trionex Website"

    logo = fields.Image(string="Logo")
    name = fields.Char(string="Name")
    description = fields.Char(string="Description")

    @classmethod
    def get_cards(cls):
        cards = cls.search([])
        return cards
