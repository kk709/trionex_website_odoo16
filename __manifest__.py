# -*- coding: utf-8 -*-
{
    'name': "Trionex Website",

    'summary': """
        Trionex is the fastest growing Software solutions and ISP Service Provider based in Lahore, Pakistan. Trionex is a technology leader delivering world-class connectivity and non-connectivity solutions""",

    'description': """
        
    """,

    'author': "Muhammad Hasnain",
    'sequence': -100,

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Trionex Website',
    'version': '1.0.0',

    # any module necessary for this one to work correctly
    'depends': ['base', 'website'],
    'assets': {
        'web.assets_frontend': [
            '/trionex_website/static/src/css/form.css',
            '/trionex_website/static/src/css/style.css',
            '/trionex_website/static/src/css/style1.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap.css.map',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap.min.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap.min.css.map',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap.rtl.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap.rtl.css.map',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-grid.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-grid.css.map',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-grid.min.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-grid.min.css.map',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-grid.rtl.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-grid.rtl.css.map',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-grid.rtl.min.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-grid.rtl.min.css.map',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-reboot.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-reboot.css.map',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-reboot.min.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-reboot.min.css.map',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-reboot.rtl.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-reboot.rtl.css.map',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css.map',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-utilities.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-utilities.css.map',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-utilities.min.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-utilities.min.css.map',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-utilities.rtl.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-utilities.rtl.css.map',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css',
            '/trionex_website/static/src/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css.map',
            '/trionex_website/static/src/vendor/bootstrap/js/bootstrap.bundle.js',
            '/trionex_website/static/src/vendor/bootstrap/js/bootstrap.bundle.js.map',
            '/trionex_website/static/src/vendor/bootstrap/js/bootstrap.bundle.min.js',
            '/trionex_website/static/src/vendor/bootstrap/js/bootstrap.bundle.min.js.map',
            '/trionex_website/static/src/vendor/bootstrap/js/bootstrap.esm.js',
            '/trionex_website/static/src/vendor/bootstrap/js/bootstrap.esm.js.map',
            '/trionex_website/static/src/vendor/bootstrap/js/bootstrap.esm.min.js',
            '/trionex_website/static/src/vendor/bootstrap/js/bootstrap.esm.min.js.map',
            '/trionex_website/static/src/vendor/bootstrap/js/bootstrap.js',
            '/trionex_website/static/src/vendor/bootstrap/js/bootstrap.js.map',
            '/trionex_website/static/src/vendor/bootstrap/js/bootstrap.min.js',
            '/trionex_website/static/src/vendor/bootstrap/js/bootstrap.min.js.map',
            '/trionex_website/static/src/vendor/php-email-form/validate.js',
            '/trionex_website/static/src/vendor/purecounter/purecounter_vanilla.js',
            '/trionex_website/static/src/vendor/purecounter/purecounter_vanilla.js.map',
        ],
    },

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/header.xml',
        'views/homepage.xml',
        'views/contact.xml',
        'views/footer.xml',
        'views/services.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    'qweb': [
        'static/src/xml/custom_login.xml',
    ],
    'application': True,
}
