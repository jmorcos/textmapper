/**
 * Copyright 2002-2016 Evgeny Gryaznov
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
package org.textmapper.lapg.builder;

import org.textmapper.lapg.api.DerivedSourceElement;
import org.textmapper.lapg.api.Nonterminal;
import org.textmapper.lapg.api.SourceElement;
import org.textmapper.lapg.api.rule.LookaheadPredicate;

class LiLookaheadPredicate extends LiUserDataHolder
		implements LookaheadPredicate, DerivedSourceElement {

	private final Nonterminal rule;
	private final boolean negated;
	private final SourceElement origin;

	LiLookaheadPredicate(Nonterminal rule, boolean negated, SourceElement origin) {
		this.rule = rule;
		this.negated = negated;
		this.origin = origin;
	}

	@Override
	public Nonterminal getPrefix() {
		return rule;
	}

	@Override
	public boolean isNegated() {
		return negated;
	}

	@Override
	public SourceElement getOrigin() {
		return origin;
	}
}