/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

const M = (title, path, subMenu, indented = false) => ({
    title,
    path: '/docs/' + (path ? path + '/' : ''),
    subMenu,
    indented
})

export const MENU = [
    {
        title: 'Overview'
    },
    M(
        'Getting Started',
        'getting_started'
    ),
    M(
        'Architecture Overview',
        'architecture'
    ),
    M(
        'Project Goals',
        'project_goals'
    ),
    M(
        'Extensions and Plugins',
        'extensions'
    ),
    M(
        'Services and Contributions',
        'services_and_contributions'
    ),
    {
        title: 'Using Theia'
    },
    M(
        'Getting Started',
        'user_getting_started'
    ),
    M(
        'Installing VS Code Extensions',
        'user_install_vscode_extensions'
    ),
    M(
        'Using the dynamic Toolbar',
        'user_toolbar'
    ),
    {
        title: 'Adopting Theia'
    },
    M(
        'Build your own IDE/Tool',
        'composing_applications'
    ),
    M(
        'Authoring Extensions',
        'authoring_extensions'
    ),
    M(
        'Authoring VS Code Extensions',
        'authoring_vscode_extensions'
    ),
    {
        title: 'Concepts APIs'
    },
    M(
        'Commands/Menus/Keybindings',
        'commands_keybindings'
    ),
    M(
        'Widgets',
        'widgets'
    ),
    M(
        'Preferences',
        'preferences'
    ),
    M(
        'Label Provider',
        'label_provider'
    ),
    M(
        'Message Service',
        'message_service'
    ),
    M(
        'Property View',
        'property_view'
    ),
    M(
        'Events',
        'events'
    ),
    M(
        'Frontend Application Contributions',
        'frontend_application_contribution'
    ),
    M(
        'Backend Application Contributions',
        'backend_application_contribution'
    ),
    M(
        'Communication via JSON-RPC',
        'json_rpc'
    ),
    M(
        'Tasks',
        'tasks'
    ),
    M(
        'Internationalization',
        'i18n'
    ),
    M(
        'Language Support',
        'language_support'
    ),
    M(
        'Dynamic Toolbar',
        'toolbar'
    ),
    M(
        'Breadcrumbs',
        'breadcrumbs'
    ),
    M(
        'Advanced Tips',
        'tips'
    ),
    {
        title: 'Theia Blueprint'
    },
    M(
        'Download',
        'blueprint_download'
    ),
    M(
        'Documentation',
        'blueprint_documentation'
    )
]

export function getMenuContext(slug, menu = MENU, context = {}) {
    const indexOfCurrent = menu.findIndex(({path}) => {
        if (path) {
            return path.includes(slug)
        }
        return false
    })
    const prev =  menu[indexOfCurrent - 1] && menu[indexOfCurrent - 1].path ?
        menu[indexOfCurrent - 1].path : menu[indexOfCurrent - 2] &&
        menu[indexOfCurrent - 2].path && menu[indexOfCurrent - 2].path

    const prevTitle = menu[indexOfCurrent - 1] && menu[indexOfCurrent - 1].path ?
        menu[indexOfCurrent - 1].title :
        menu[indexOfCurrent - 2] && menu[indexOfCurrent - 2].path &&
        menu[indexOfCurrent - 2].title

    const next = menu[indexOfCurrent + 1] && menu[indexOfCurrent + 1].path ?
        menu[indexOfCurrent + 1].path : menu[indexOfCurrent + 2] &&
        menu[indexOfCurrent + 2].path && menu[indexOfCurrent + 2].path

    const nextTitle = menu[indexOfCurrent + 1] && menu[indexOfCurrent + 1].path ?
        menu[indexOfCurrent + 1].title :
        menu[indexOfCurrent + 2] && menu[indexOfCurrent + 2].path &&
        menu[indexOfCurrent + 2].title

    return {
        prev: prev,
        prevTitle,
        next: next,
        nextTitle
    }
}
