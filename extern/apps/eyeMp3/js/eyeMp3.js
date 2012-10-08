/*global Windows */
/*jslint browser: true, devel: true, newcap: true, sloppy: true, windows: true */
/*
 _____           _____                     
|  ___|         /  ___|                    
| |__ _   _  ___\ `--.  ___ _ ____   _____ 
|  __| | | |/ _ \`--. \/ _ \ '__\ \ / / _ \
| |__| |_| |  __/\__/ /  __/ |   \ V /  __/
\____/\__, |\___\____/ \___|_|    \_/ \___|
       __/ |                               
      |___/                                

EyeServeOS is released under the GNU Affero General Public License Version 3 (AGPL3)
 -> provided with this release in license.txt
 -> or via web at www.gnu.org/licenses/agpl-3.0.txt

Copyright © 2005 - 2010 eyeos Team (team@eyeos.org)
             since 2010 Lars Knickrehm (mail@lars-sh.de)
			 since 2012 EyeServe Team (contact@eyeserve.net)
*/

function eyeMp3_loadSound(myPid, path, title) {
	var e = document.getElementById(myPid + '_eyeMp3_Flash');
	e.SetVariable('jsValue', path);
	e.SetVariable('jsMethod', 'newfile');
	Windows.SetTitle(myPid + '_eyeMp3_Window', title);
}