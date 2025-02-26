/**
 * Copyright 2002-2022 Evgeny Gryaznov
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
package org.textmapper.lapg.api;

import org.textmapper.lapg.LapgCore;
import org.textmapper.lapg.api.ast.AstType;

public interface Symbol extends NamedElement, NamedElement.Anonymous,
		SourceElement, UserDataHolder {

	Name EOI = LapgCore.name("eoi");
	Name ERROR = LapgCore.name("error");
	Name INVALID_TOKEN = LapgCore.name("invalid_token");

	int getIndex();

	AstType getType();

	boolean isTerm();

	boolean isUnused();
}
