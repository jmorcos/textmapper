/**
 * Copyright 2002-2010 Evgeny Gryaznov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.textway.lapg.test.oldparser;

import java.util.List;

import org.textway.lapg.api.Prio;
import org.textway.templates.api.ILocatedEntity;

public class CPrio implements Prio, ILocatedEntity {

	private final int prio;
	private final CSymbol[] symbols;

	private final String input;
	private final int line;

	public CPrio(int prio, List<CSymbol> symbols, String input, int line) {
		this.prio = prio;
		this.symbols = symbols.toArray(new CSymbol[symbols.size()]);
		this.input = input;
		this.line = line;
	}

	public int getPrio() {
		return prio;
	}

	public CSymbol[] getSymbols() {
		return symbols;
	}

	public String getLocation() {
		return input + "," + line;
	}

	@Override
	public String toString() {
		StringBuffer sb = new StringBuffer();
		switch (prio) {
		case LEFT:
			sb.append("left");
			break;
		case RIGHT:
			sb.append("right");
			break;
		case NONASSOC:
			sb.append("nonassoc");
			break;
		}
		sb.append("=[");
		boolean notfirst = false;
		for (CSymbol s : symbols) {
			if (notfirst) {
				sb.append(", ");
			} else {
				notfirst = true;
			}
			sb.append(s.getName());
		}
		sb.append("]");
		return sb.toString();
	}

	public int getEndOffset() {
		// TODO Auto-generated method stub
		return 0;
	}

	public int getLine() {
		// TODO Auto-generated method stub
		return 0;
	}

	public int getOffset() {
		// TODO Auto-generated method stub
		return 0;
	}

	public String getResourceName() {
		// TODO Auto-generated method stub
		return null;
	}
}