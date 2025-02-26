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

/**
 * Gryaznov Evgeny, 6/13/12
 */
public interface LexerData {

	int getNchars();

	int[] getChar2no();

	int[] getGroupset();

	// matrix of [getNchars() * num of states] -> next state (non-negative), or action (negative)
	int[] getChange();

	// array of pairs [rule, next state]
	int[] getBacktracking();
}
